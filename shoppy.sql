use shoppy;
select database();
show tables;
select * from information_schema.views where table_schema = 'shoppy';
select * from member;
select * from product;
desc product;

-- 전체 상품 조회
select  pid,
        concat('images/', image) as image
from product;        

-- product + product_detailinfo 테이블 조인
select  p.pid,
		p.name,
		p.price,
		p.info,
		p.rate,
		concat('/images/', p.image) as image,
		p.img_list as imgList,
        json_object(
			"title_en", pd.title_en,  
			"title_ko", pd.title_ko,
			"list", pd.list
		) as detailInfo
	from product p, product_detailinfo pd
    where p.pid = pd.pid and p.pid = 1;
        

show tables;
select * from product_detailinfo;

--
select * from member;

use shoppy;
select database();
show tables;

select * from member;
select count(id) as isFind from member where id = 'nyong'; 

DELETE FROM member WHERE id = 'nyong';
DELETE FROM member WHERE id = 'jinjin';

-- 사용 불가 (pwd - Hash 사용) : select count(*) from member where id = 'test' and pwd = '1234';
select pwd from member where id = 'test';



















