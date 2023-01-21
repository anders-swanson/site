import { Posts } from "./metadata";

export function LookupByID(id) {
  const posts = Posts();
  return posts[id];
}

export function LookupByDate(date) {
  const posts = Posts();
  return lookupByDateInternal(posts, date, 0, posts.length - 1);
}

// do a binary search using date comparisons
function lookupByDateInternal(posts, date, start, stop) {
  if (start > stop) {
    return [-1, false];
  }
  const mid = Math.floor((start + stop) / 2);
  let p = posts[mid];
  if (p.date === date) {
    return [mid, p];
  }
  if (date > p.date) {
    return lookupByDateInternal(posts, date, start, mid - 1);
  } else {
    return lookupByDateInternal(posts, date, mid + 1, stop);
  }
}
