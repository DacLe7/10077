export interface Product {
  id: number;
  name: string;
  description: string;
  scent: string;
  benefit: string;
  reason: string;
  emoji: string;
  emotions: [number, number];
  tags: string[];
  category: string;
  image_url: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Nến Hương Cam Quýt Tươi Mát",
    description: "Nến thơm với hương cam quýt tự nhiên, tạo cảm giác tươi mát và tràn đầy năng lượng",
    scent: "Cam, Chanh, Bưởi",
    benefit: "Tăng năng lượng, tạo cảm giác sảng khoái",
    reason: "Hương cam quýt giúp tăng serotonin, hormone hạnh phúc",
    emoji: "🍊",
    emotions: [0.5, 1.0],
    tags: ["energizing", "fresh", "mood_boost"],
    category: "citrus",
    image_url: "https://tuscanycandle.com/cdn/shop/files/April-4.jpg?v=1698869584&width=1000"
  },
  {
    id: 2,
    name: "Nến Hương Vanilla Ngọt Ngào",
    description: "Hương vanilla ngọt ngào kết hợp với caramel và gỗ đàn hương tạo cảm giác ấm áp",
    scent: "Vanilla, Caramel, Gỗ Đàn Hương",
    benefit: "Tạo cảm giác ấm áp, thoải mái",
    reason: "Vanilla có tác dụng an thần, giảm stress",
    emoji: "🍦",
    emotions: [0.0, 0.5],
    tags: ["cozy", "stress_relief", "relaxing"],
    category: "vanilla",
    image_url: "https://www.nestnewyork.com/cdn/shop/files/NESTNY_FINE_PO_MAV_CAN_CL-1_white-background.jpg?v=1689587533"
  },
  {
    id: 3,
    name: "Nến Hương Hoa Nhài Tinh Khiết",
    description: "Hương hoa nhài tinh khiết kết hợp với hoa hồng và oải hương tạo không gian lãng mạn",
    scent: "Hoa Nhài, Hoa Hồng, Hoa Oải Hương",
    benefit: "Tăng cảm xúc lãng mạn, thư thái",
    reason: "Hoa nhài giúp cân bằng cảm xúc, tạo sự bình yên",
    emoji: "🌸",
    emotions: [0.0, 0.5],
    tags: ["romantic", "luxury", "relaxing"],
    category: "floral",
    image_url: "https://www.nestnewyork.com/cdn/shop/files/NESTNY_CORE_INJ_CAN_3W_SPEC-1_white-background.jpg?v=1701725545"
  },
  {
    id: 4,
    name: "Nến Hương Oải Hương Thư Giãn",
    description: "Hương oải hương tự nhiên giúp thư giãn sâu và cải thiện chất lượng giấc ngủ",
    scent: "Lavender, Chamomile, Bergamot",
    benefit: "Giảm stress, cải thiện giấc ngủ",
    reason: "Lavender có tác dụng an thần, giảm lo âu",
    emoji: "💜",
    emotions: [-0.5, 0.0],
    tags: ["sleep", "stress_relief", "relaxing", "meditation"],
    category: "lavender",
    image_url: "https://as2.ftcdn.net/v2/jpg/13/05/02/89/1000_F_1305028907_mnXbAAwuGHnq2rWoY5Wc4S3corLRyUGe.jpg"
  },
  {
    id: 5,
    name: "Nến Hương Gỗ Đàn Hương Ấm Áp",
    description: "Hương gỗ đàn hương ấm áp kết hợp với vanilla tạo cảm giác bình yên và ổn định",
    scent: "Sandalwood, Vanilla, Hương Thảo",
    benefit: "Tạo cảm giác bình yên, ổn định",
    reason: "Gỗ đàn hương giúp tĩnh tâm, giảm căng thẳng",
    emoji: "🪵",
    emotions: [-0.5, 0.0],
    tags: ["meditation", "spiritual", "stress_relief"],
    category: "fresh",
    image_url: "https://kalamazoocandle.com/cdn/shop/products/SandalwoodJarcopy.jpg?v=1691697667&width=1780"
  },
  {
    id: 6,
    name: "Nến Hương Bạc Hà Tươi Mát",
    description: "Hương bạc hà tươi mát kết hợp với bạch đàn giúp tăng cường tập trung",
    scent: "Peppermint, Eucalyptus, Lemon",
    benefit: "Tăng tập trung, giảm đau đầu",
    reason: "Bạc hà có tác dụng kích thích tinh thần, giảm mệt mỏi",
    emoji: "🌿",
    emotions: [-0.5, 0.0],
    tags: ["focus", "fresh", "energizing"],
    category: "fresh",
    image_url: "https://www.pureintegrity.com/media/ss_size1/peppermint-16.jpg"
  },
  {
    id: 7,
    name: "Nến Hương Hoa Cúc Dịu Nhẹ",
    description: "Hương hoa cúc dịu nhẹ giúp duy trì sự cân bằng và thư giãn tự nhiên",
    scent: "Chamomile, Hoa Cúc, Hương Thảo",
    benefit: "Duy trì sự cân bằng, thư giãn nhẹ nhàng",
    reason: "Hoa cúc giúp duy trì trạng thái bình yên",
    emoji: "🌼",
    emotions: [0.0, 0.0],
    tags: ["relaxing", "natural", "stress_relief"],
    category: "floral",
    image_url: "https://www.lafco.com/mm5/graphics/00000001/2/ClassicCandle_480x480.jpg"
  },
  {
    id: 8,
    name: "Nến Hương Gỗ Tuyết Tùng Tự Nhiên",
    description: "Hương gỗ tuyết tùng tự nhiên giúp kết nối với thiên nhiên và tạo cảm giác an toàn",
    scent: "Cedarwood, Pine, Moss",
    benefit: "Kết nối với thiên nhiên, tạo cảm giác an toàn",
    reason: "Hương gỗ tự nhiên giúp tạo cảm giác ổn định",
    emoji: "🌲",
    emotions: [0.0, 0.0],
    tags: ["natural", "cozy", "spiritual"],
    category: "fresh",
    image_url: "https://chus.vn/images/detailed/208/1647352595_10359-14-f1_w767_h1105.jpg"
  },
  {
    id: 9,
    name: "Nến Hương Hoa Sen Thanh Tịnh",
    description: "Hương hoa sen thanh tịnh kết hợp với tre và trà xanh tạo không gian thiền định",
    scent: "Lotus, Bamboo, Green Tea",
    benefit: "Tạo không gian tĩnh lặng, thanh tịnh",
    reason: "Hoa sen tượng trưng cho sự bình yên và tinh khiết",
    emoji: "🪷",
    emotions: [0.0, 0.0],
    tags: ["meditation", "spiritual", "natural"],
    category: "floral",
    image_url: "https://www.grandcandles.com/cdn/shop/files/RosePetalsSoyCandle-CLR-Burning.jpg?v=1737591868&width=800"
  }
]; 