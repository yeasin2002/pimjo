import Logo from "@/assets/icons/Logo.svg";
import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  BarChart,
  Disc,
  Github,
  Grid,
  Layout,
  Megaphone,
  Menu,
  Search,
  ShoppingCart,
  Sparkles,
  X,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  layout: Layout,
  "bar-chart": BarChart,
  sparkles: Sparkles,
  megaphone: Megaphone,
  "shopping-cart": ShoppingCart,
  grid: Grid,
};

interface NavItem {
  id: string;
  label: string;
  type?: "mega";
  href?: string;
  columns?: {
    title: string;
    description: string;
    icon: string;
    href: string;
  }[];
}

async function getMenuData() {
  try {
    const res = await fetch(
      "https://69102d7545e65ab24ac5d435.mockapi.io/mega-menu"
    );
    if (!res.ok) throw new Error("Failed to fetch menu data");
    return res.json() as Promise<NavItem[]>;
  } catch (error) {
    console.error("Error fetching menu:", error);
    return [];
  }
}

export async function HomeNavbar() {
  const items = await getMenuData();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              {items.map((item) => (
                <NavigationMenuItem key={item.id}>
                  {item.type === "mega" ? (
                    <>
                      <NavigationMenuTrigger>
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.columns?.map((col) => {
                            const Icon = iconMap[col.icon] || Grid;
                            return (
                              <li key={col.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={col.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="flex items-center gap-2 text-sm font-medium leading-none">
                                      <Icon className="h-4 w-4 text-muted-foreground" />
                                      {col.title}
                                    </div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground pl-6">
                                      {col.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      href={item.href || "#"}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative hidden lg:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Quick search..."
              className="h-9 w-64 rounded-md border border-input bg-background pl-9 pr-12 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
            <div className="absolute right-2 top-2 flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </div>
          </div>

          {/* Social Icons */}
          <div className="hidden items-center gap-1 sm:flex">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-muted-foreground"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-muted-foreground"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-muted-foreground"
            >
              <Disc className="h-4 w-4" />
              <span className="sr-only">Discord</span>
            </Button>
          </div>

          {/* Auth & CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/sign-in"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Sign in
            </Link>
            <Button variant={"secondary"}>Pricing & FAQ</Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-4 py-4">
                <div className="flex items-center gap-2 px-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                    <div className="h-4 w-4 rounded-full bg-white/30" />
                  </div>
                  <span className="text-xl font-bold">Logo</span>
                </div>
                <div className="px-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="h-9 w-full rounded-md border border-input bg-background pl-9 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    />
                  </div>
                </div>
                <nav className="flex flex-col gap-2">
                  {items.map((item) => (
                    <div key={item.id} className="flex flex-col gap-2">
                      {item.type === "mega" ? (
                        <div className="px-2 py-1">
                          <div className="mb-2 font-semibold">{item.label}</div>
                          <div className="grid gap-2 pl-2">
                            {item.columns?.map((col) => {
                              const Icon = iconMap[col.icon] || Grid;
                              return (
                                <Link
                                  key={col.title}
                                  href={col.href}
                                  className="flex items-center gap-2 rounded-md p-2 text-sm hover:bg-accent"
                                >
                                  <Icon className="h-4 w-4 text-muted-foreground" />
                                  {col.title}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href || "#"}
                          className="rounded-md px-2 py-2 text-sm font-medium hover:bg-accent"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-4 px-2">
                  <Link href="/sign-in" className="text-sm font-medium">
                    Sign in
                  </Link>
                  <Button variant={"secondary"}>Pricing & FAQ</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
