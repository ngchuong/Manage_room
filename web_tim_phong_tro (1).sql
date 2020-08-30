-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th8 30, 2020 lúc 04:04 AM
-- Phiên bản máy phục vụ: 10.4.11-MariaDB
-- Phiên bản PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `web_tim_phong_tro`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `path` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`path`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `images`
--

INSERT INTO `images` (`id`, `path`) VALUES
(1, '[\"/image/room1.jpg\", \"/image/room2.jpg\"]'),
(14, '[\"/image/room4.jpg\", \"/image/room3.jpg\"]'),
(15, '[\"/image/room5.jpg\", \"/image/room6.jpg\"]'),
(16, '[\"/image/room5.jpg\", \"/image/room6.jpg\", \"/image/room4.jpg\"]'),
(17, '[\"/image/room1.jpg\", \"/image/room7.jpg\"]'),
(18, '[\"/image/room9.jpg\"]'),
(19, '[\"/image/room9.jpg\", \"/image/room5.jpg\"]'),
(20, '[\"room2.jpg\",\"room3.jpg\"]'),
(21, '[\"room5.jpg\",\"room6.jpg\",\"room7.jpg\"]'),
(22, '[\"room7.jpg\"]'),
(23, '[\"/image/room6.jpg\",\"/image/room7.jpg\"]'),
(24, '[\"/image/room6.jpg\",\"/image/room7.jpg\"]'),
(25, '[\"/image/room6.jpg\",\"/image/room7.jpg\",\"/image/room8.jpg\"]'),
(26, '[\"room2.jpg\",\"room3.jpg\",\"room6.jpg\",\"room7.jpg\"]');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `rooms`
--

CREATE TABLE `rooms` (
  `id` int(11) NOT NULL,
  `list_image` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `acreage` int(11) NOT NULL,
  `bed` int(11) NOT NULL,
  `bathroom` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `type_room` int(11) NOT NULL,
  `isActive` int(11) NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `rooms`
--

INSERT INTO `rooms` (`id`, `list_image`, `title`, `address`, `acreage`, `bed`, `bathroom`, `price`, `id_user`, `type_room`, `isActive`, `date_created`) VALUES
(3, 1, 'Chính chủ cho thuê VP đẹp giá rẻ 80m2 tại Vạn Bảo - Ba Đình', 'Vạn Bảo, Phường Liễu Giai, Quận Ba Đình, Hà Nội', 80, 1, 1, 8000000, 25, 1, 1, '2020-06-05 09:45:03'),
(4, 1, 'Chính chủ cho thuê nhà phố Kim Mã - 70m2x7 tầng, MT = 10m', 'Kim Mã, Phường Kim Mã, Quận Ba Đình, Hà Nội', 100, 2, 2, 10000000, 25, 1, 1, '2020-06-05 09:45:03'),
(5, 18, 'Phòng trọ giá rẻ 343 Đội Cấn - Ba Đình', 'Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội', 20, 1, 1, 2500000, 25, 1, 1, '2020-06-05 15:00:49'),
(6, 1, 'Cho thuê văn phòng đẹp giá rẻ - 130 Quán Thánh, Ba Đình', 'Quán Thánh, Phường Quán Thánh, Quận Ba Đình, Hà Nội', 26, 1, 1, 3000000, 25, 1, 1, '2020-06-05 15:02:00'),
(7, 19, 'Cần cho thuê gấp nhà phố 4 Lê Thanh Nghị - Hai Bà Trưng', 'Lê Thanh Nghị, Phường Bách Khoa, Quận Hai Bà Trưng, Hà Nội', 24, 1, 1, 4000000, 1, 1, 1, '2020-06-05 15:00:25'),
(8, 1, 'Cho thuê tầng 1 tòa Goldmark City, 136 Hồ Tùng Mậu- Cầu Giấy', 'Hồ Tùng Mậu, Phường Mai Dịch, Quận Cầu Giấy, Hà Nội', 100, 2, 1, 10000000, 1, 1, 1, '2020-06-05 09:48:34'),
(9, 1, 'Cho thuê căn hộ chung cư C7 Giảng Võ, Ba Đình, 3 PN, 16 triệu/tháng.', 'Trần Huy Liệu, Phường Giảng Võ, Quận Ba Đình, Hà Nội', 25, 2, 1, 16000000, 1, 1, 1, '2020-06-05 09:49:28'),
(10, 14, 'Cho thuê căn hộ tầng 21 Artemis Lê Trọng Tấn, Thanh Xuân. 83 m2, 2PN', 'Lê Trọng Tấn, Phường Khương Mai, Quận Thanh Xuân, Hà Nội', 22, 1, 1, 3500000, 25, 1, 1, '2020-06-05 13:59:07'),
(11, 16, 'Cho thuê căn hộ chung cư cao cấp Watermark số 395 phố Lạc Long Quân', 'Lạc Long Quân, Phường Nghĩa Đô, Quận Cầu Giấy, Hà Nội', 100, 2, 2, 2000000, 1, 1, 1, '2020-06-05 14:05:14'),
(12, 16, 'Cho thuê chung cư Vinhome D\' Capitale Trân Duy Hưng, 2PN, đủ đồ.', 'Trần Duy Hưng, Phường Trung Hòa, Quận Cầu Giấy, Hà Nội', 60, 2, 2, 15000000, 25, 1, 1, '2020-06-05 14:05:14'),
(13, 14, 'Cho thuê chung cư Home City 177 Trung Kính, 3 PN, đủ đồ.', 'Trung Kính, Phường Yên Hòa, Quận Cầu Giấy, Hà Nội', 100, 2, 2, 17000000, 1, 1, 1, '2020-06-05 14:07:09'),
(14, 17, 'Cho thuê căn hộ chung cư Indochina Plaza, 110 m2, 3 PN, full nội thất.', 'Xuân Thủy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội', 110, 3, 2, 2000000, 25, 1, 1, '2020-06-05 14:07:09'),
(15, 15, 'Cho thuê căn hộ chung cư Indochina Plaza 233 Xuân Thủy, 2pn, giá 22 tr', 'Xuân Thủy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội', 95, 1, 1, 22000000, 27, 1, 1, '2020-06-05 14:12:14'),
(16, 14, 'Cho thuê căn hộ chung cư cao cấp D\'. Le Roi Soleil Quảng An, 2Pn.', 'Xuân Diệu, Phường Quảng An, Quận Tây Hồ, Hà Nội', 90, 2, 2, 8000000, 26, 1, 1, '2020-06-05 14:12:14'),
(17, 16, 'Cho thuê căn hộ chung cư cao cấp Flc Twin Tower, 3PN (nội thất cơ bản)', 'Cầu Giấy, Phường Dịch Vọng, Quận Bắc Từ Liêm, Hà Nội', 30, 2, 3, 5000000, 27, 1, 1, '2020-06-05 14:14:39'),
(18, 17, 'Cho thuê căn hộ chung cư Indochina Plaza 233 Xuân Thủy, 2pn, giá 22 tr', 'Xuân Thủy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội', 70, 1, 1, 6000000, 27, 1, 1, '2020-06-05 14:14:39'),
(19, 15, 'chung cư Đông ngạc - Kẻ vẽ, ở ngay, tách sổ đỏ', 'Đông Ngạc, Phường Đông Ngạc, Quận Bắc Từ Liêm, Hà Nội', 42, 2, 1, 700000000, 1, 2, 1, '2020-06-05 14:18:22'),
(20, 16, 'CĐT mở bán chung cư Tôn đức thắng - Khâm thiên, fuul đồ ,ở ngay', 'Khâm Thiên, Phường Khâm Thiên, Quận Đống Đa, Hà Nội', 35, 2, 1, 350000000, 26, 2, 1, '2020-06-05 14:18:22'),
(21, 14, 'chung cư phố vọng - đại la ,fuul đồ , ở ngay', 'Phố Vọng, Phường Đồng Tâm, Quận Hai Bà Trưng, Hà Nội', 39, 2, 1, 800000000, 26, 2, 1, '2020-06-05 14:20:43'),
(22, 14, 'Chủ đầu tư mở bán căn hộ chung cư Vũ Tông Phan 450 triệu/căn, full đồ', 'Vũ Tông Phan, Phường Khương Trung, Quận Thanh Xuân, Hà Nội', 35, 2, 2, 450000000, 26, 2, 1, '2020-06-05 14:20:43'),
(23, 14, 'Mở bán căn hộ chung cư TRương Định - giáp bát,600tr/căn, fuul nội thất', 'Trương Định, Phường Trương Định, Quận Hai Bà Trưng, Hà Nội', 35, 2, 1, 600000000, 27, 2, 1, '2020-06-05 14:22:06'),
(24, 15, 'CĐT mở bán chung cư Kim mã - Giang văn minh, 800tr/căn, full nội thất', 'Kim Mã, Phường Kim Mã, Quận Ba Đình, Hà Nội', 46, 2, 1, 800000000, 27, 2, 1, '2020-06-05 14:22:06'),
(25, 20, 'Cho thuê phòng giá rẻ', '519 kim mã, ba đình', 30, 1, 1, 3000000, 1, 1, 0, '2020-06-05 14:51:01'),
(28, 23, '1', '1', 1, 1, 1, 1, 30, 1, 1, '2020-06-05 15:29:25'),
(29, 24, 'cần cho thuê phòng gấp', '10 quan hoa, cầu giấy', 20, 1, 1, 2000000, 30, 1, 1, '2020-06-05 15:32:17'),
(30, 25, 'Cho thuê phòng báo cáo', 'cầu giấy, hà nội', 30, 1, 1, 3000000, 30, 1, 1, '2020-06-06 00:48:10'),
(31, 26, 'test báo cáo đồ án', 'ba đình, hà nội', 50, 1, 1, 5000000, 1, 2, 0, '2020-06-06 00:50:07');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone_number` varchar(11) NOT NULL,
  `email` text NOT NULL,
  `password` varchar(255) NOT NULL,
  `level` int(11) NOT NULL,
  `isActive` int(11) NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `phone_number`, `email`, `password`, `level`, `isActive`, `created`) VALUES
(1, 'nguyễn giang chương', '0962296199', 'chuong.nguyengiang@email.com', '12345', 2, 1, '2020-04-20 17:00:00'),
(25, 'Nguyen Hai', '0962296188', 'hai.education@gmail.com', '54321', 1, 1, '2020-06-05 09:42:08'),
(26, 'nguyen van Duong', '0346365245', 'duong.ictu@gmail.com', '12345', 1, 1, '2020-06-05 14:07:57'),
(27, 'Trần Thị Lan Anh', '0365356987', 'lananh@gmail.com', '123456', 1, 1, '2020-06-05 14:09:54'),
(28, 'Phan thị Lụa', '0365751257', 'lua109@gmail.com', '123456789', 1, 1, '2020-06-05 14:39:11'),
(29, 'Hoàng Phan Anh', '0354258745', 'phananhhoang@gmail.com', '9876452', 1, 1, '2020-06-05 14:39:45'),
(30, 'Nguyễn Thị Phương Anh123', '034569523', 'phuonganh1@gmail.com', '123456', 1, 0, '2020-06-05 14:42:15'),
(31, 'nguyễn giang chương11', '0622965121', 'chuon1g@gmail.com', '1234511', 1, 0, '2020-06-06 00:48:53');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `list_image` (`list_image`),
  ADD KEY `id_user` (`id_user`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT cho bảng `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `rooms`
--
ALTER TABLE `rooms`
  ADD CONSTRAINT `rooms_ibfk_1` FOREIGN KEY (`list_image`) REFERENCES `images` (`id`),
  ADD CONSTRAINT `rooms_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
