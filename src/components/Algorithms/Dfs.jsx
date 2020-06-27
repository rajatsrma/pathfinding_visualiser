function dfs(props) {
  let animations = props.animations;
  let val = dfsHelper(
    props.sourceX,
    props.sourceY,
    props.targetX,
    props.targetY,
    props.visited,
    animations
  );
  return animations;
}

function dfsHelper(i, j, x, y, vis, animations) {
  if (i === x && j === y) return true;
  if (i >= 20 || i < 0 || j >= 50 || j < 0) return false;
  if (vis[`${i}, ${j}`] === true) return false;

  // if not in the termination condition..

  vis[`${i}, ${j}`] = true;
  animations.push([i, j]);
  if (dfsHelper(i, j + 1, x, y, vis, animations)) return true;
  if (dfsHelper(i - 1, j, x, y, vis, animations)) return true;
  if (dfsHelper(i + 1, j, x, y, vis, animations)) return true;
  if (dfsHelper(i, j - 1, x, y, vis, animations)) return true;

  return false;
}

export default dfs;
