"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { RadioCardItem, RadioCardLabel, RadioCardRoot } from "./ui/radio-card";

const MENU_ITEMS = [
	{ label: "インデックスページ", url: "/" },
	{ label: "React Hooksを使用しない場合", url: "/none_hooks" },
	{ label: "useStateでの実装1", url: "/use_state/1" }
];

export const Menu = () => {
	const pathname = usePathname();
	const router = useRouter();
	const [selectedPage, setSelectedPage] = useState("");

	useEffect(() => {
		setSelectedPage(pathname);
	}, []);

	const handleOnValueChange = useCallback(({ value }) => {
		setSelectedPage(value);
		router.push(value);
	}, []);

	const rowsRadioCardItem = useMemo(() => {
		return MENU_ITEMS.map((item) => (
			<RadioCardItem key={item.url} label={item.label} value={item.url} />
		));
	}, []);

	return (
		<RadioCardRoot
			size="sm"
			value={selectedPage}
			onValueChange={handleOnValueChange}
		>
			<RadioCardLabel>メニュー</RadioCardLabel>
			{rowsRadioCardItem}
		</RadioCardRoot>
	);
};
