import type {
  Comment,
  CommentWithChildren,
  Post,
  PostWithChildren,
} from "@/types";

// コメントをツリー構造に整理する関数
export function organizeComments(comments: Comment[]): CommentWithChildren[] {
  const commentMap: Record<string, CommentWithChildren> = {};
  const rootComments: CommentWithChildren[] = [];

  // コメントをマップに整理し、children配列を初期化
  comments.forEach((comment) => {
    commentMap[comment.documentId] = { ...comment, children: [] };
  });

  // 親子関係を構築
  comments.forEach((comment) => {
    // parentがオブジェクトの場合はdocumentIdを取得、文字列の場合はそのまま使用
    const parentId =
      comment.parent && typeof comment.parent === "object"
        ? comment.parent.documentId
        : comment.parent;

    if (parentId && commentMap[parentId]) {
      // 親コメントが存在する場合のみ、その親のchildrenに自分を追加
      (commentMap[parentId]?.children ?? []).push(
        commentMap[comment.documentId]
      );
    } else {
      // 親コメントが存在しない場合はルートコメントとして扱う
      rootComments.push(commentMap[comment.documentId]);
    }
  });

  return rootComments;
}

// 投稿をツリー構造に整理する関数
export function organizePosts(posts: Post[]): PostWithChildren[] {
  const postMap: Record<string, PostWithChildren> = {};
  const rootPosts: PostWithChildren[] = [];

  // 投稿をマップに整理
  posts.forEach((post) => {
    postMap[post.thingid] = { ...post, children: [] };
  });

  // 親子関係を構築
  posts.forEach((post) => {
    if (post.parentid) {
      if (postMap[post.parentid]) {
        postMap[post.parentid].children.push(postMap[post.thingid]);
      } else {
        rootPosts.push(postMap[post.thingid]);
      }
    } else {
      rootPosts.push(postMap[post.thingid]);
    }
  });

  // いいね数で並べ替え
  return rootPosts.sort((a, b) => b.likes - a.likes);
}
