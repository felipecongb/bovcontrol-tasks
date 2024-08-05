import Routers from './src/routes';
// import SyncService from './src/services/sync_service';

export default function App() {
  // useEffect(() => {
  //   SyncService.start();
  //   return () => SyncService.stop();
  // }, []);

  return <Routers/>;
};