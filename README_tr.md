# Programlama Temelleri - Sınav 1

-  `main` branch'ında çalışın.
-  Değişikliklerinizi `solution.js` dosyasına kaydedin ve repository'nize push edin.
-  İnternetten araştırma yapabilirsiniz, ancak kodunuzu kendiniz yazın - AI kullanmayın.
-  Görevleri tamamlamak için sınıf arkadaşlarınızdan veya öğretmenlerinizden yardım almak yasaktır.
-  Bir görevi netleştirmek için öğretmene veya asistan öğretmene sorabilirsiniz (makul sınırlar dahilinde).
-  Aşağıdaki talimatları izleyerek testi tamamlayın.
-  **Önemli**: Değişkenlerinizin/fonksiyonlarınızın isimlerinin aşağıdaki talimatlardaki isimlerle aynı olduğundan emin olun.
-  Tüm fonksiyonlarınız bir değer döndürmelidir.
-  İyi şanslar!

## Görev 1 - Los veya New ile mi başlıyor?

`startsWithLosOrNew` adında bir fonksiyon oluşturun.

Fonksiyon, bir string alır ve aşağıdakileri döndürür:

- `true`: eğer string `"Los"` veya `"New"` ile başlıyorsa
- `false`: diğer tüm durumlarda

Fonksiyon **büyük/küçük harf duyarsız** olmalıdır.

Örneğin:

```javascript
startsWithLosOrNew("New York"); // true
startsWithLosOrNew("newark"); // true 
startsWithLosOrNew("London"); // false
startsWithLosOrNew("Los Angeles"); // true
startsWithLosOrNew("lOs Angeles"); // true
startsWithLosOrNew("San Carlos"); // false
```

## Görev 2 - 100'e bölünebiliyor mu?

`isDivisibleBy100` adında bir fonksiyon oluşturun.

Fonksiyon bir tam sayı alır ve aşağıdakileri döndürür:

- `true`: eğer tam sayı 100'e bölünebiliyorsa
- `false`: eğer tam sayı 100'e **bölünemiyorsa**

Örneğin:

```javascript
isDivisibleBy100(1); // false
isDivisibleBy100(1000); // true
isDivisibleBy100(100); // true
```

## Görev 3 - Hava nasıl?

Bu görevi tamamlamak için bir **ternary operatörü** kullanın. `isRaining` adında bir fonksiyon oluşturun. Eğer `true` geçilirse `"yağmurlu gün - şemsiye gerekli"` döndürün. Eğer `false` geçilirse `"kuru gün - şemsiyeni evde bırak"` döndürün.

### Örnek

```javascript
isRaining(true); // 'yağmurlu gün - şemsiye gerekli'
```

## Görev 4 - Güç sende

`powerOf` adında bir fonksiyon oluşturun.

Fonksiyon bir tam sayı alır ve bu tam sayıyı kendisi ile üs alarak döndürür.

Örneğin:

```javascript
// 2'nin 2. kuvveti
powerOf(2); // 4 

// 3'ün 3. kuvveti
powerOf(3); // 27

// 4'ün 4. kuvveti
powerOf(4); // 256

// 5'in 5. kuvveti
powerOf(5); // 3125
```

## Görev 5 - Aralık

`range` adında bir fonksiyon oluşturun.

Fonksiyon iki sayı alır:

- `start` (başlangıç)
- `end` (bitiş)

Fonksiyon, `start`'tan `end`'e kadar olan sayıları içeren bir dizi döndürür.

Örneğin:

```javascript
range(5, 10); // [ 5, 6, 7, 8, 9, 10 ] 
range(10, 16); // [ 10, 11, 12, 13, 14, 15, 16 ] 
range(1, 6); // [ 1, 2, 3, 4, 5, 6 ] 
range(0, 3); // [ 0, 1, 2, 3 ] 
```