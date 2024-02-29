import './index.css'
import { PageHeader } from './layouts/PageHeader';
import { categories, snacks } from './data/home';
import { useState } from 'react';
import { SnackGridItem } from './components/SnackGridItem';
import { SmallSidebarItem } from './layouts/Sidebar';

function App() {
  const [selectedCategory,setSelectedCategory] = useState(categories[0]);
  return (
    <div className='max-h-screen flex flex-col bg-secondary'>
      <PageHeader />
      <div className='grid grid-cols-[auto,1fr] overflow-auto'>
        <SmallSidebarItem categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
        <div className='overflow-x-hidden px-8 pb-4'>
          <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
            {snacks.map(snack => (

              <SnackGridItem key={snack.id} selectedCategory={selectedCategory} {...snack}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
