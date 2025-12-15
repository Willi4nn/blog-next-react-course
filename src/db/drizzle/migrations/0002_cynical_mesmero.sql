PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_posts` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`author` text NOT NULL,
	`content` text NOT NULL,
	`excerpt` text NOT NULL,
	`created_at` text NOT NULL,
	`published` integer NOT NULL,
	`updated_at` text NOT NULL,
	`cover_image_url` text NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_posts`("id", "slug", "title", "author", "content", "excerpt", "created_at", "published", "updated_at", "cover_image_url") SELECT "id", "slug", "title", "author", "content", "excerpt", "created_at", "published", "updated_at", "cover_image_url" FROM `posts`;--> statement-breakpoint
DROP TABLE `posts`;--> statement-breakpoint
ALTER TABLE `__new_posts` RENAME TO `posts`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE UNIQUE INDEX `posts_slug_unique` ON `posts` (`slug`);