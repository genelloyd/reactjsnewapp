import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import { TaskProvider } from "./context/TaskContext";

const App = () => {
    return (
        <BrowserRouter>

            <TaskProvider>
                <Routes />
            </TaskProvider>

        </BrowserRouter>

    //     <div className="bg-blue-500 text-white p-4">
    //         Hi Testing here!
    //     </div>
    );
};

export default App;
