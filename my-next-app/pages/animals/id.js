import { fetchAnimals } from '../../services/api';

const AnimalDetail = ({ animal }) => {
  if (!animal) return <p>Loading...</p>;

  return (
    <div>
      <h1>Détails de {animal.name}</h1>
      <p>Espèce: {animal.species}</p>
      <p>Race: {animal.breed}</p>
      <p>Couleur: {animal.color}</p>
      <p>Poids: {animal.weight}</p>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const animals = await fetchAnimals();
  const animal = animals.find((a) => a.id === parseInt(params.id));

  return { props: { animal } };
}

export default AnimalDetail;
