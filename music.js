class Music{
    constructor(title, singer, img, file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file= file;
    }

    getName(){
        return this.title + " - " + this.singer
    }
}

const musicList =[
    new Music("Bir Ay Doğar İlk Akşamdan Geceden", "Cengiz Özkan","cengiz.jpg","Cengiz Özkan bir ay doğar.mp3"),
    new Music("Keklik Gibi", "Melek Mosso","melek keklik.jpg","Melek Mosso keklik gibi.mp3"),
    new Music("Şu Dağlarda Kar Olsaydım", "Müslüm Gürses","müslüm.jpg","Müslüm Gürses şu dağlarda kar olsaydım.mp3"),
    new Music("Eman Eman", "Şakiro","şakiro.jpg","Şakiro eman eman.mp3"),
    new Music("Talihim Yok Bahtım Kara", "Zeynep Baksi Karatağ","zeynep talih.jpg","Zeynep Baksi Karatağ talihim yok bahtım kara.mp3")
];