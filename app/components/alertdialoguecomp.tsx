import * as React from "react";
import { AlertDialog } from "radix-ui";
import Link from "next/link";

export default function AlertDialogGetContact(){

//     async function copyToClipboard(data: object | object[]): Promise<void> {
//   try {
//     const json = JSON.stringify(data, null, 2); // красиво форматируем JSON
//     await navigator.clipboard.writeText(json);
//     console.log("Объект скопирован в буфер обмена.");
//   } catch (error) {
//     console.error("Ошибка при копировании в буфер обмена:", error);
//   }
// }
    return<>
    <AlertDialog.Root>
		<AlertDialog.Trigger asChild>
			<button className="inline-flex h-[35px] items-center justify-center  bg-emerald-400 hover:bg-emerald-300 dark:bg-blue-500 hover:bg-blue-300 rounded px-[15px] font-medium leading-none outline-none outline-offset-1 focus-visible:outline-violet6 select-none">
				Contacts
			</button>
		</AlertDialog.Trigger>
		<AlertDialog.Portal>
			<AlertDialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
			<AlertDialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
				<AlertDialog.Title className="m-0 text-[17px] font-medium text-mauve12">
					Contacts and phone number:
				</AlertDialog.Title>
				<AlertDialog.Description className="mb-5 mt-[15px] text-[15px] leading-normal text-mauve11">
					<p>Telegram: <Link href={'https://t.me/@ewanG808'}> @ewanG808 </Link></p>
					<p>Email: <Link href={'mailto:telepop.iv@gmail.com'}> telepop.iv@gmail.com</Link></p>
                    {/* <p>WatsApp: <Link href={'https://wa.me/+79855203082'}> +79855203082</Link></p> */}
					<p>Mobile Phone 1: <Link href={'tel:+79185655234'}> +7-918-565-52-34</Link></p>
                    <p>Mobile Phone 2: <Link href={'tel:+79855203082'}> +7-985-520-30-82</Link></p>
                    
				</AlertDialog.Description>
				<div className="flex justify-end gap-[25px]">
					<AlertDialog.Cancel asChild>
						<button className="inline-flex h-[35px] items-center justify-center rounded  bg-emerald-400 hover:bg-emerald-300 dark:bg-blue-500 hover:bg-blue-300 px-[15px] font-medium leading-none outline-none outline-offset-1 hover:bg-mauve5 focus-visible:outline-2 focus-visible:outline-mauve7 select-none">
							Close
						</button>
					</AlertDialog.Cancel>
					{/* <AlertDialog.Action asChild>
						<button className="inline-flex h-[35px] items-center justify-center rounded bg-red4 px-[15px] font-medium leading-none text-red11 outline-none outline-offset-1 hover:bg-red5 focus-visible:outline-2 focus-visible:outline-red7 select-none">
							Yes, delete account
						</button>
					</AlertDialog.Action> */}
				</div>
			</AlertDialog.Content>
		</AlertDialog.Portal>
	</AlertDialog.Root>
    </>
}


