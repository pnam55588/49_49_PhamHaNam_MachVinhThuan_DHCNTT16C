let list = [
    {
        id: "1",
        name: "Loa Bluetooth JBL Charge 4",
        price: 2590000,
        info: "Thiết kế hình trụ bền chắc. Công suất 30 W Kết nối chuẩn Bluetooth 4.2. Dung lượng 7500 mAh Chuẩn chống nước IPX7 ",
        img: "../../img/Products/jbl-charge-4.jpg",
        loai: "loa"
    },
    {
        id: "2",
        name: "Loa Bluetooth JBL Go 3",
        price: 890000,
        info: "Nhỏ gọn vừa lòng bàn tay quai xỏ ngón chắc chắn Chống nước và chống bụi IP67 Chất lượng âm thanh tốt âm lượng vừa, kết nối Bluetooth 5.1",
        img: "../../img/Products/jbl-go-3.jpg",
        loai:"loa"
    },
    {    
        id: "3",
        name: "Tai nghe nhét tai JBL C150SI",
        price: 249000,
        info: "Thiết kế hiện đại sang trọng Âm thanh chân thực,sống động Điều khiển dễ dàng Jack cắm 3.5 mm,dây bện chống rối ",
        img:"../../img/Products/jbl-c150si.jpg",
        loai:"tai nghe"
    } ,
    {
        id: "4",
        name:"Tai nghe Bluetooth On - ear JBL T500BT",
        price: 1049000,
        info: "Kiểu dáng hiện đại, chất liệu cao cấp Kết nối Bluetooth 5.0 Dung lượng 3000 mAh SONY",
        img: "../../img/Products/jbl-t500bt.jpg",
        loai: "tai nghe"
    },
    {
        id: "5",
        name: "Loa Bluetooth Sony Extra Bass SRS - XB43",
        price: 407000,
        info: "Màng loa X - Balanced mới cho âm trầm mạnh mẽ hơn và giảm méo tiếng Tích hợp thêm 2 loa tweeters hoàn toàn mới cho chất lượng âm thanh trong trẻo hơn Kết nối Bluetooth 5.0 Chống nước, bụi, nước biển chuẩn IP67 Thời lượng pin dài lên đến 24 giờ Nhiều chế độ âm thanh",
        img: "../../img/Products/sony-srs-xb43.jpg",
        loai: "loa"
    },
    {   
        name:"Tai nghe nhét tai Sony MDR - XB55AP",
        price: 649000,
        info: "Thiết kế tinh tế, hiện đại Âm thanh mạnh mẽ Tương thích mọi thiết bị Mic kết nối tiện dụng",
        img: "../../img/Products/sony-mdr-xb55ap.jpg",
        loai:"tai nghe"
    },
    {
        id: "6",
        name: "Tai nghe Bluetooth Sony WH - CH150",
        price: 859000,
        info: "Thiết kế đơn giản, gọn nhẹ Thời lượng pin 35 giờ Tương thích với trợ lý ảo trên điện thoại SAMSUNG",
        img : "../../img/Products/sony-wh-ch150.jpg",
        loai:"tai nghe"
    },
    {
        id: "7",
        name:"Tai nghe Bluetooth Samsung Galaxy Buds 2",
        price: 2990000,
        info: "Thiết kế nhỏ gọn, thời thượng Âm thanh sống động với loa 2 chiều AKG Công nghệ chống ồn ANC Tùy chỉnh âm thanh theo sở thích Kết nối Bluetooth 5.2",
        img: "../../img/Products/samsung-galaxybud2.jpg",
        loai:"tai nghe"
    },
    {
        id: "8",
        name:"Tai nghe Apple AirPods 3",
        price: 4390000,
        info: "Thiết kế nhỏ gọn,kiểu dáng tinh tế Chất âm mạnh mẽ nhờ Spatial audio Kết nối Bluetooth 5.0 Thời lượng pin 30 giờ Chuẩn kháng nước IPX4 BOSE ",
        img: "../../img/Products/apple-airpod3.jpg",
        loai:"tai nghe"
    },
    {    
        id: "9",
        name: "Loa Bose Soundlink Flex",
        price : 4190000 ,
        info: "Âm thanh sắc nét,rõ ràng Kháng nước và kháng bụi IP67 Công nghệ PositionIQ tối ưu hóa âm thanh Thiết kế Rugged cứng cáp, chắc chắn ",
        img: "../../img/Products/bose-soundlink-flex.jpg",
        loai: "loa"
    },
    {
        id: "10",
        name: "Loa Bluetooth Bose Portable Home Speaker" ,
        price: 9490000,
        info: "Loa thông minh nhỏ gọn nhất của Bose Điểu khiển bằng giọng nói Dễ dàng thiết lập thông qua app Chức năng Multi - room và Streaming",
        img: "../../img/Products/bose-home-speaker.jpg",
        loai: "loa"
    }
]

function getDetail(id) {
    const item = list.filter(item => item.id == id)
    localStorage.setItem("detail", JSON.stringify(item[0]))
}