import * as express from 'express';
import errorHandlerMiddleware from './middlewares/errorHandler';
import routerLogin from './routes/loginRoutes';
import routerTeam from './routes/teamRoutes';
import routerMatch from './routes/matchRoutes';
import routerLeaderboard from './routes/leaderboardRoutes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
    this.app.use('/login', routerLogin);
    this.app.use('/teams', routerTeam);
    this.app.use('/matches', routerMatch);
    this.app.use('/leaderboard', routerLeaderboard);
    this.app.use(errorHandlerMiddleware);
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export default App;
