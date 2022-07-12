import { runQuery } from 'queries';
import prisma from 'lib/db';

export async function getWebsiteById(website_id) {
  return runQuery(
    prisma.website.findUnique({
      where: {
        website_id,
      },
    }),
  );
}
