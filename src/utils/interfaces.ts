export type Data = {
    email: string
}

export interface IProps {
  handleSubmit: (data: Data) => void;
  user?: Data| null
}