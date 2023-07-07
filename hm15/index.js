// 1. Создать два файла apiPost.js и apiPhotos.js 
// 2. В этих файлах создать два класса ApiPost и ApiPhotos
// 3. В классах реализовать статические методы get, add, update, delete Post/Photos
// 4. Это два класса экспортировать и импортировать в index.js
// 5. Вызвать все методы чтобы проверить результат
import ApiPost from './apiPost.js';
import ApiPhotos from './apiPhotos.js';

(async () => {
ApiPost
  console.log(await ApiPost.get(1));
  console.log(await ApiPost.add({ title: 'Test', body: 'Test post', userId: 1 }));
  console.log(await ApiPost.update(1, { title: 'Updated', body: 'Updated post', userId: 1 }));
  await ApiPost.delete(1);

ApiPhotos
  console.log(await ApiPhotos.get(1));
  console.log(await ApiPhotos.add({ title: 'Test photo', url: 'https://via.placeholder.com/600/92c952', thumbnailUrl: 'https://via.placeholder.com/150/92c952' }));
  console.log(await ApiPhotos.update(1, { title: 'Updated photo', url: 'https://via.placeholder.com/600/92c952', thumbnailUrl: 'https://via.placeholder.com/150/92c952' }));
  await ApiPhotos.delete(1);
})();

