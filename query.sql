SELECT
	class AS 'カテゴリ',
	MIN(price) AS '最安値',
	MAX(price) AS '最高値'
FROM resource GROUP BY class;