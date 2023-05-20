import imgDownload, { imageResponse } from './utils/imageGen';

async function hello() {
  const link = await imageResponse({ message: 'german castle' });
  imgDownload(link, './src');
  imgDownload(link );
}

hello();
