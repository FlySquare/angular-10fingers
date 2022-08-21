export class Users {
    id: number;
    username: string;
    time: number;
    success_count: string;
    created_at: string;
    updated_at: string;

  prepare(response: any) {
    Object.assign(this, response);
    return this;
  }

}
