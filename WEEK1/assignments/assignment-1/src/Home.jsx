export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        I am a student of Codetrain
      </h1>

      <p className="mt-4 text-gray-700 text-lg">Am currently learning React</p>

      <div className="mt-6 flex justify-center gap-10">
        <img
          src="https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
          alt="bag"
          className="h-40 w-40 rounded-lg shadow-md"
        />

        <img
          src="https://images.unsplash.com/photo-1605733513597-a8f8341084e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
          alt="bag"
          className="h-40 w-40 rounded-lg shadow-md"
        />

        <img
          src="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
          alt="bag"
          className="h-40 w-40 rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
