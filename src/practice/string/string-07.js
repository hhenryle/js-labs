export function fillPath(path, params) {
  if (typeof path !== 'string') throw new Error('Path is not a string');
  if (typeof params !== 'object' || params === null || Array.isArray(params))
    throw Error('Params is not a object');
  if (path === '') return '';

  const segments = path.split('/');

  const filledSeagments = segments.map((segment) => {
    if (segment.startsWith(':')) {
      const key = segment.slice(1);
      if (params.hasOwnProperty(key)) return String(params[key]);
    }

    return segment;
  });

  return filledSeagments.join('/');
}
