import { nextServer } from "./api";
import { Note, NoteFormValues, FetchNotesResponse } from "@/types/note";
import {
  LoginRequest,
  RegisterRequest,
  User,
  CheckSessionRequest,
  UpdateUserRequest,
} from "@/types/user";

export const fetchNotes = async (
  page: number,
  search?: string,
  tag?: string
): Promise<FetchNotesResponse> => {
  const params: Record<string, unknown> = { page, perPage: 12 };
  if (search) params.search = search;
  if (tag) params.tag = tag;
  const res = await nextServer.get<FetchNotesResponse>("/notes", { params });
  return res.data;
};

export const createNote = async (note: NoteFormValues): Promise<Note> => {
  const { data } = await nextServer.post<Note>("/notes", note);
  return data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const { data } = await nextServer.delete<Note>(`/notes/${id}`);
  return data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await nextServer.get<Note>(`/notes/${id}`);
  return data;
};

export const register = async (data: RegisterRequest) => {
  const res = await nextServer.post<User>("/auth/register", data);
  return res.data;
};

export const login = async (data: LoginRequest) => {
  const res = await nextServer.post<User>("/auth/login", data);
  return res.data;
};

export const logout = async (): Promise<void> => {
  await nextServer.post("/auth/logout");
};

export const checkSession = async () => {
  const res = await nextServer.get<CheckSessionRequest>("/auth/session");
  return res.data.success;
};

export const getMe = async () => {
  const { data } = await nextServer.get<User>("/users/me");
  return data;
};

export const updateMe = async (user: UpdateUserRequest) => {
  const { data } = await nextServer.patch<User>("/users/me", user);
  return data;
};
