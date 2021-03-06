import { httpGet } from './main';

export interface GetUsersearchData {
  searchList: {
    id: number;
    name: string;
    pngSrc: string;
    desc: string;
    canteen: string;
    star: number;
    dish: {
      name: string;
      id: number;
    }[];
  }[];
}

export async function getUsersearch(
  searchName: string,
  userId: number,
  tagList: [],
  canteenId: number,
): Promise<GetUsersearchData> {
  return await httpGet<GetUsersearchData, { searchName: string; userId: number; tagList: []; canteenId: number }>(
    '/user/search',
    { searchName: searchName, userId: userId, tagList: tagList, canteenId: canteenId },
  );
}
