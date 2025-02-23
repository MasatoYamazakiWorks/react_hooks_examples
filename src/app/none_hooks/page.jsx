"use client";

import { Field, Input } from "@chakra-ui/react";
import { Prose } from "@/components/ui/prose";

export default function NoneHooksPage() {
	let textValue = "Hello world";

	const handleOnChange = ({ value }) => {
		textValue = value;
	};

	return (
		<div>
			<Prose>
				<h1>React Hooksを使用しない場合</h1>
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
