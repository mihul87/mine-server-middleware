<script setup>
  const event = useRequestEvent();
  console.log("Event.context.cookie before useFetchWithCookie: ", event.context?.cookie);
  console.log("Event.node.req.headers.cookie before useFetchWithCookie: ", event.node.req.headers?.cookie);
  const data = await useFetchWithCookie(event, '/api/partner')
  console.log("Event.context.cookie after useFetchWithCookie: ", event.context?.cookie);
  console.log("Event after useFetchWithCookie: ", event.node.req.headers?.cookie);
</script>

<template>
  <div>
    <pre>{{data}}</pre>
  </div>
</template>
