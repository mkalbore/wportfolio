"use client";

import { Button } from "../components/ui/button";
import { useToast } from "../components/ui/use-toast";

export function ToastWithTitle() {
	const { toast } = useToast();

	return (
		<Button
			variant='quint'
			onClick={() => {
				toast({
					title: "Uh oh! Something went wrong.",
					description: "There was a problem with your request.",
				});
			}}>
			LINK
		</Button>
	);
}
