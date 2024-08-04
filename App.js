import Routers from './src/routes';
import SyncService from './src/services/sync_service';

const App = () => {
  useEffect(() => {
    SyncService.start();
    return () => SyncService.stop();
  }, []);

  return <Routers/>;
};
export default App;