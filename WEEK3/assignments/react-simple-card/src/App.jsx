import Title from'./Title';
import Description  from './Description';
import SimpleCard from './SimpleCard';



function App (){
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <SimpleCard
          title="A Title"
          description="High Quality Bag."
          imageUrl="https://images.unsplash.com/photo-1605733513597-a8f8341084e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
        />
      </div>
    </>
  );

}

export default App;