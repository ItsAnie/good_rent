export function buildFinalRecommendation(searchResults, defaultRec) {
  const neededCount = 9;

  let merged = [...(searchResults || [])].map(item => ({
    ...item,
    id: item.id || item.key, 
  }));

  if (merged.length < neededCount) {
    const fallback = defaultRec
      .filter(def => !merged.some(s => s.id === (def.id || def.key)))
      .map(def => ({
        ...def,
        id: def.id || def.key,
      }));

    merged = [...merged, ...fallback];
  }

  merged = merged.slice(0, neededCount);

  return [
    merged.slice(0, 3),
    merged.slice(3, 6),
    merged.slice(6, 9),
  ];

  console.log(defaultRec[0], searchResults[0]);

}
