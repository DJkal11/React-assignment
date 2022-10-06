
import Card from "./Card";
import Data from "../courses.json"

function Dashboard() {
 

  return (
    <div data-testid="dashboard-0">
      <h1 className="text-center text-5xl font-bold mt-10">Courses</h1>
    <div className="p-10 lg:p-24 md:p-5  sm:pt-12 sm:p-24 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 gap-5 md:gap-5 sm:gap-16">
      
        {Data.results.map((item, index) => {
            return (
                <Card data-testid={`card-${index}`} key={index} info = {item} />
            )
        })}
    </div>
    </div>
  );
}

export default Dashboard;