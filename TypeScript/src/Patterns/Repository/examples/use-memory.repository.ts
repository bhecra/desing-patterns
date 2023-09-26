import { MemoryRepository } from '../frontend/repository/memory.repository';
import { FilterOperatorEnum, IFilter } from '../frontend/utils/index';
interface IUser {
  age: number;
  name: string;
  lastname: string;
  id:  string;
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
  {
		name: "Jescie Brown",
		age: 25,
		lastname: "Hayden Parrish",
		id: '28'
	},
	{
		name: "Ori Wilkerson",
		age: 46,
		lastname: "Tana Wheeler",
		id: '51'
	},
	{
		name: "Baxter Barry",
		age: 22,
		lastname: "Nolan Davenport",
		id: '94'
	},
	{
		name: "Barry Chang",
		age: 58,
		lastname: "Martena Conner",
		id: '5'
	},
	{
		name: "Amber Kirk",
		age: 24,
		lastname: "Dara Saunders",
		id: '10'
	}
];



(async ()=>{
  const userRepository = new MemoryRepository<IUser>(users);

  await userRepository
  .update({
    id: '3',
    age: 22,
    name: 'Dario Fernando',
    lastname: 'Burbano',
  })

 const filter: IFilter = {
    args: {
      'lastname':{
        operator:FilterOperatorEnum.ILike,
        value: 'Burbano'
      }
    }
 }
 const filterPaginator: IFilter = {
    args: {   
    },
    page:{
      start:2,
      end:4
    }
 }

 console.log('paginator',await userRepository.search(filterPaginator));
  // console.log(await userRepository.get('3'));
  // console.log(await userRepository.delete('3'));
  // console.log(await userRepository.search());
  // console.log(await userRepository.search(filter));
})()
