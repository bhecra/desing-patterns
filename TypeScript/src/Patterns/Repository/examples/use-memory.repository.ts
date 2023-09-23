import { MemoryRepository } from '../frontend/repository/memory.repository';
interface IUser {
  age: number;
  name: string;
  lastname: string;
  id: number | string;
}
const users: IUser[] = [
  {
    id: '1',
    age: 30,
    name: 'Christian',
    lastname: 'Burbano',
  },
  {
    id: '2',
    age: 27,
    name: 'Geraldine',
    lastname: 'Claros',
  },
  {
    id: '3',
    age: 22,
    name: 'Dario',
    lastname: 'Burbano',
  },
  {
    id: '4',
    age: 26,
    name: 'David',
    lastname: 'Claros',
  },
];




(async ()=>{
  const userRepository = new MemoryRepository<IUser>(users);

  console.log(userRepository);
  await userRepository
  .update({
    id: '3',
    age: 22,
    name: 'Dario Fernando',
    lastname: 'Burbano',
  })

  console.log(await userRepository.get('3'));
  console.log(await userRepository.delete('3'));
  console.log(userRepository);
})()