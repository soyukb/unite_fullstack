/**
 *  article controller
 */

import { factories } from '@strapi/strapi';
import { Context } from 'koa';

interface MediaInput {
    media_type: "image" | "video" | "gif";
    media_url: string;
    // 必要に応じて他のフィールドを追加
  }
  
  interface PostInput {
    content: string;
    post_created_at: string;
    depth: string;
    likes: string;
    thingid: string;
    translated_content: string;
    // 必要に応じて他のフィールドを追加
  }
  

export default factories.createCoreController('api::article.article', ({ strapi }) => ({
  async create(ctx: Context) {
    const { media = [], posts = [], ...articleData } = ctx.request.body as any;

    try {
      // Mediaの一括作成（型注釈追加）
      const createdMedia = await Promise.all(
        (media as MediaInput[]).map((m) =>
          strapi.entityService.create('api::media.media', { data: m })
        )
      );

      // Postの一括作成（型注釈追加）
      const createdPosts = await Promise.all(
        (posts as PostInput[]).map((p) =>
          strapi.entityService.create('api::post.post', { data: p })
        )
      );

      // IDだけ抽出して articleData に追加（connect形式に変更）
      articleData.media = {
        connect: createdMedia.map((m) => m.documentId),
      };

      articleData.posts = {
        connect: createdPosts.map((p) => p.documentId),
      };

      console.log(articleData);

      // Article 作成
      const entry = await strapi.entityService.create('api::article.article', {
        data: articleData,
        populate: ['media', 'posts'],
      });

      ctx.body = entry;
    } catch (error) {
      strapi.log.error('Error creating article with nested relations:', error);
      ctx.badRequest('Custom create failed', { error });
    }
  },

  async delete(ctx) {
    const articleId = ctx.params.id;

    // Article を取得（リレーションも含める）
    const article = await strapi.entityService.findOne('api::article.article', articleId, {
      populate: ['posts', 'media'],
    }) as any;
    
    console.log(article)

      // リレーションから Post と Media の ID を抜き出しておく
    const postIds = article.posts?.map((p: any) => p.documentId) || [];
    const mediaIds = article.media?.map((m: any) => m.documentId) || [];

    // 関連 Post を削除（リレーション切れててもIDで削除できる）
    for (const postId of postIds) {
      await strapi.entityService.delete('api::post.post', postId);
    }

    // 関連 Media を削除
    for (const mediaId of mediaIds) {
      await strapi.entityService.delete('api::media.media', mediaId);
    }    

    // 最後に Article を削除
    const response = await strapi.entityService.delete('api::article.article', articleId);
    return response;
  }
}));