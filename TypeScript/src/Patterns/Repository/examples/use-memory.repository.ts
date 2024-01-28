import { MemoryRepository } from '../frontend/repository/memory.repository';
import { FilterOperatorEnum, IFilter } from '../frontend/utils/index';
interface IUser {
  age: number;
  name: string;
  lastName: string;
  id:  string;
}


const users: IUser[] = [
  {
    id: '1',
    age: 30,
    name: 'Christian',
    lastName: 'Burbano',
  },
  {
    id: '2',
    age: 27,
    name: 'Geraldine',
    lastName: 'Claros',
  },
  {
    id: '3',
    age: 22,
    name: 'Dario',
    lastName: 'Burbano',
  },
  {
    id: '4',
    age: 26,
    name: 'David',
    lastName: 'Claros',
  },
  {
		name: "Jescie Brown",
		age: 25,
		lastName: "Hayden Parrish",
		id: '28'
	},
	{
		name: "Ori Wilkerson",
		age: 46,
		lastName: "Tana Wheeler",
		id: '51'
	},
	{
		name: "Baxter Barry",
		age: 22,
		lastName: "Nolan Davenport",
		id: '94'
	},
	{
		name: "Barry Chang",
		age: 58,
		lastName: "Martena Conner",
		id: '5'
	},
	{
		name: "Amber Kirk",
		age: 24,
		lastName: "Dara Saunders",
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
    lastName: 'Burbano',
  })

 const filter: IFilter = {
    args: {
      'lastName':{
        operator:FilterOperatorEnum.ILike,
        value: 'Burbano'
      },
      'age':{
        operator:FilterOperatorEnum.GreaterThanOrEqualTo,
        value: 30
      }
    }
 }
 const filter2: IFilter = {
    args: {
      'lastName':{
        operator:FilterOperatorEnum.ILike,
        value: 'Claros'
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

 console.log('paginator',await userRepository.search(filter));
  // console.log(await userRepository.get('3'));
  // console.log(await userRepository.delete('3'));
  // console.log(await userRepository.search());
  console.log(await userRepository.search(filter));
  console.log(await userRepository.search(filter2));
})()
