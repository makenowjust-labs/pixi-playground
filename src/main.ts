import * as PIXI from 'pixi.js';

declare namespace global {
  let app: PIXI.Application;
}

const main = async () => {
  const {default: image250path} = await import(/* webpackChunkName: "assets" */'./assets/images/250.jpg');
  const {default: image500path} = await import(/* webpackChunkName: "assets" */'./assets/images/500.jpg');

  const app = new PIXI.Application();
  document.body.appendChild(app.view);

  app.loader.add('image250', image250path).add('image500', image500path);

  app.loader.load((_loader: any, resources: any) => {
    const sprite250 = new PIXI.Sprite(resources.image250.texture);
    const sprite500 = new PIXI.Sprite(resources.image500.texture);

    // Set transform of `sprite250`.
    sprite250.anchor.set(0.5);

    // Set transform of `sprite500`.
    sprite500.anchor.set(0.5);
    sprite500.x = app.renderer.width / 2;
    sprite500.y = app.renderer.height / 2;

    // Set sprite parameter of sprites.
    sprite250.tint = 0x88ff88;
    sprite500.tint = 0xff8888;

    // `DisplayObject` tree:
    //   |- `app.stage`
    //      |- `sprite500`
    //         |- `sprite250`
    sprite500.addChild(sprite250);
    app.stage.addChild(sprite500);

    app.ticker.add(() => {
      // Update transform of sprites on each tick.
      sprite250.skew.x += 0.01;
      sprite500.rotation += 0.01;
    });
  });

  // Expose `app` as global.
  global.app = app;
};

// Run `main` function.
main().catch(err => console.error(err));
