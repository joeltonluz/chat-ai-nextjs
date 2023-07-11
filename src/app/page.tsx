import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using Vercel SDK</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div  className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>JL</AvatarFallback>
              <AvatarImage src="https://github.com/joeltonluz.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">Joelton:</span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, facere tenetur inventore minima, adipisci quod natus iusto temporibus nam facilis corrupti molestiae in ut quis qui architecto dolore laboriosam error.
            </p>
          </div>
          <div  className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>JL</AvatarFallback>
              <AvatarImage src="https://github.com/rocketseat.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">Rocketseat:</span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, facere tenetur inventore minima, adipisci quod natus iusto temporibus nam facilis corrupti molestiae in ut quis qui architecto dolore laboriosam error.
            </p>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="How can I help you?" />
          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
