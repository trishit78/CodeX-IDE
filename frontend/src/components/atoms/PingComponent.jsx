import usePing from "../../hooks/apis/queries/usePing";

export const PingComponent = () => {
    const { isLoading, data } = usePing();

  if(isLoading) {
    return (
      <>
        Loading...
      </>
    )
  }

  return (
    <>
      new {data}
    </>
  )
}