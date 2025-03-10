import { Output, Services } from "~templates-utils";
import { Input } from "./meta";

export function generate(input: Input): Output {
  const services: Services = [];

  services.push({
    type: "app",
    data: {
      projectName: input.projectName,
      serviceName: input.appServiceName,
      source: {
        type: "image",
        image: input.appServiceImage,
      },
      proxy: {
        port: 80,
        secure: true,
      },
      mounts: [
        {
          type: "volume",
          name: "cache",
          mountPath: "/var/www/shaarli/cache",
        },
        {
          type: "volume",
          name: "data",
          mountPath: "/var/www/shaarli/data",
        },
      ],
    },
  });

  return { services };
}
