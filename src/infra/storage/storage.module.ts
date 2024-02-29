import { Uploader } from '@/domain/forum/application/storage/uploader'
import { Module } from '@nestjs/common'
import { EnvModule } from '../env/env.module'
import { FakeUploader } from 'test/storage/fake-uploader'

@Module({
  imports: [EnvModule],
  providers: [
    {
      provide: Uploader,
      //   useClass: R2Storage,
      useClass: FakeUploader,
    },
  ],
  exports: [Uploader],
})
export class StorageModule {}
