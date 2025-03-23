import { ConfigService } from '../shared/projects/shared/src/lib/services/config.service';

export function appInitializer(configService: ConfigService): () => Promise<void> {
  return () =>
    configService.loadConfig().toPromise().then((data) => {
      console.log('Config loaded during initialization:', data);
      configService.setConfig(data);
    });
}
