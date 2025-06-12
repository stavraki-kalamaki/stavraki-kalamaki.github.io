## Subresource Integrity

If you are loading Highlight.js via CDN you may wish to use [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) to guarantee that you are using a legimitate build of the library.

To do this you simply need to add the `integrity` attribute for each JavaScript file you download via CDN. These digests are used by the browser to confirm the files downloaded have not been modified.

```html
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js"
  integrity="sha384-5xdYoZ0Lt6Jw8GFfRP91J0jaOVUq7DGI1J5wIyNi0D+eHVdfUwHR4gW6kPsw489E"></script>
<!-- including any other grammars you might need to load -->
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/languages/go.min.js"
  integrity="sha384-HdearVH8cyfzwBIQOjL/6dSEmZxQ5rJRezN7spps8E7iu+R6utS8c2ab0AgBNFfH"></script>
```

The full list of digests for every file can be found below.

### Digests

```
sha384-70Hnsgq+pLV6Nv+jLuSMFD/HnkaD43hro7nQzNuHz4xgF+tKOytAIoA6Sge1X9HB /es/languages/armasm.js
sha384-bLfpGfjsTXF9t/A7zVpnKcKLVqfpoDQO3cj/Otmw7Kg6WeGCUKiKIfT4ORFq4YFK /es/languages/armasm.min.js
sha384-GEKuLIWUwFVie1Sa2ux9Tqd97zFLMG27gkSee6tgrlQ2T7ZV2Z2k9Gb4VkllEqns /es/languages/avrasm.js
sha384-ZC3UT/YWwRsO9wJC1OuvC1LbMr5Gl6m+8t4IWuxAVU7AdxXERm5q/mKZUc59L18u /es/languages/avrasm.min.js
sha384-G8Zl3te56ft3aGpe25uWefXidaWzErZNty1FuVVPzapgLdI9KGeqi440JMcGSrpK /es/languages/llvm.js
sha384-5/rMDjrvVizUEgvQXzdMw4bEnPi4rc4g55j6uygbCX563PiwUWOt1DOFg8nWOW4k /es/languages/llvm.min.js
sha384-y2Db3nK1pqkBuLVsLlozVsu9r7X0O+m0WMXIj5SIsuz9E5KgJpuaybwueJksi/62 /es/languages/mipsasm.js
sha384-KMMe6+QkGQP4DfvJsD56GpZJP/8yXSPru/9XyyyjWUcsMpLDC/244yr6u7v+xkRP /es/languages/mipsasm.min.js
sha384-PNujUMly7HbeO9305dfzt3Yey7Bs4cx8IxXK4YiBp3k7XF1fi10TzTOfiAkYJiKm /es/languages/smali.js
sha384-O0Inb820+EuZH82ASj7FVKYAmXRz+AzJ5zradHpgFEewAMxQ5xU85u2LjzhtQDho /es/languages/smali.min.js
sha384-SlI/W+G8uWNUJSAK5aQ6qG6L1vCJfzBIj4n7pmxtlQLBONfh4nqlvapD4XN3obTG /es/languages/x86asm.js
sha384-6jCvxwz6+4SETxn2V7LPLbyOa80MAobeFcGMoSk3ZR25GKcQQdZierMKqC5XdM+6 /es/languages/x86asm.min.js
sha384-vny78QQbxaaD/525+QaaNXnMJ1ScCyVPdaNKVxN3kDwFJdvmriaAnjyWPCJDBziC /languages/armasm.js
sha384-t67w5HJDUbNsGJgMXu0fyABJE4s+YQn0hpn78kGPC1NfenqQ/JIw4g9jy0QMJZn4 /languages/armasm.min.js
sha384-H1ktm9MvMAGcDYHzo8eoSNxe70VwyuyFmmiVvWvJlGNWDcFOok7t29KhHnrrU1dB /languages/avrasm.js
sha384-ged+H4JNXmGkHMYWfYfax1sk57U7EASWstnVP4n/jFJDScjuqV562RgxriO7o3Un /languages/avrasm.min.js
sha384-d0udVFqKcGL9t4V4uWX4gZjFdP1Pm0e8KKzoUrLUmuCUsolZkWSvoCT0UNN1Gcx3 /languages/llvm.js
sha384-H3eqxK8Ve23Rhvh2PBwboAibXmhLmgY2eTAg/ECOtrg8Z3vgwwHzLkhrc8m+jQtn /languages/llvm.min.js
sha384-Fx0+eFAFHv2pT/+wp3iRcz0XyzyFhON0v43hzm/0Hg8kZaL1wyTiXXRmer5JXtuh /languages/mipsasm.js
sha384-VeVYtm/0co5ibFqSd/kX+kGQTsiOZmyuQryNrHfS6CXUV5ZIc7xPvRH5j6S/L0+s /languages/mipsasm.min.js
sha384-HFLfyJiO+lBUM21kqb1b65qouJvQhlZYo2pi75ReJvNJud2SY6PhEUf3Kt72KPHS /languages/smali.js
sha384-2GrZ6a8N5i11PDfuj2MDvHVQppLDRwjSg1ns22QcwXe/xCliQwFwKItwovpu4w/M /languages/smali.min.js
sha384-84n3ZSWWJWOuj+nQr6fRxTWhQzXtn0OxWyGL/59PeLhK/0Ii3XgZD9oMInf7+bCW /languages/x86asm.js
sha384-d1w6as9peRTJh7Tgj50482oZIrj0+1guPVjy1QRfEafPvwMu6JZ/J9CiS5cT8XE9 /languages/x86asm.min.js
sha384-tmOoohajFqiTWs4bNiew43OJygLM6GIRFgP6WsBRX/3l/aiswRIQdP5Bbnp4UHRq /highlight.js
sha384-LgFlY+8LFgwG979Q+nw5T3dGSIFaMoNNiscvu+NdiFObTR7XshT8O2IhguFr5gpw /highlight.min.js
```

