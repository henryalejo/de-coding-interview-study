const animals = [
    {
      type: 'Dog',
      mammal: true,
    },
    {
      type: 'Snake',
      mammal: false,
    },
    {
      type: 'Cheetah',
      mammal: true,
    },
  ]

  const filteredAnimals = animals.filter((animal) =>  animal.mammal );
  
  console.log(filteredAnimals);