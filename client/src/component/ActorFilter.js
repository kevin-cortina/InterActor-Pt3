import React from 'react';

export default function ActorFilter({ actorFilters }) {
  console.log(actorFilters)
  return (
    actorFilters.map((actor) => {
      const actorFilterId = 'search-filter-' + actor.id;

      return (<h4 key={actor.id} className="header chip hoverable actor-filter" id={actorFilterId}>
      {actor.name} <button id={actorFilterId} className="btn white gray-text chip close-button">✕</button>
  </h4>)
  })
  )
}