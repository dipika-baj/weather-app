import WeatherContextProvider from "./context/WeatherContextProvider";
import Weather from "./pages/Weather";

function App() {
    return (
        <WeatherContextProvider>
            <Weather />
        </WeatherContextProvider>
    );
}

export default App;
