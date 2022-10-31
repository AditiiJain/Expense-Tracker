import Navbar from "./components/Navbar";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
function App() {
  return (
    <>
      <div className="md:h-screen bg-[#f7f7f7]">
        <Navbar />
        <main className="flex flex-col-reverse gap-6 md:gap-0 md:flex-row w-screen p-6 md:p-12 app-container">
          <div className="md:w-1/2 ">
            <Balance />
          </div>
          <div className="md:w-1/2 md:self-center">
            <AddTransaction />
          </div>
        </main>
      </div>
      <style jsx="true">
        {`
          @media (min-width: 768px) {
            .app-container {
              height: calc(100vh - 56px);
            }
          }
        `}
      </style>
    </>
  );
}

export default App;
