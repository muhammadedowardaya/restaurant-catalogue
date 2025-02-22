import React from 'react';
import RestaurantList from '../components/RestaurantsList';

export default function Home({ restaurants }) {
  return (
    <div className="container">
      <RestaurantList restaurants={restaurants} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://restaurant-api.dicoding.dev/list');
  const { restaurants } = await response.json();

  return {
    props: {
      restaurants,
    },
  };
}
