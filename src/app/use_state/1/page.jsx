"use client";

import { Field, Input } from "@chakra-ui/react";
import { Prose } from "@/components/ui/prose";
import { useState } from "react";

export default function NoneHooksPage() {
	const [textValue, setTextValue] = useState("Hello world");

	const handleOnChange = ({ target: { value } }) => {
		setTextValue(value);
	};

	return (
		<div>
			<Prose>
				<h1>useStateでの実装</h1>
			</Prose>
			<Field.Root>
				<Field.Label>入力フィールド</Field.Label>
				<Input
					defaultValue={textValue}
					onChange={handleOnChange}
					placeholder="任意文字を入力"
				/>
				<Field.Label>出力フィールド</Field.Label>
				<Input value={textValue} disabled />
			</Field.Root>
		</div>
	);
}
