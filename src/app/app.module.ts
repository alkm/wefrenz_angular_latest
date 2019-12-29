import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from './components/modal/modal.module';
import { HttpModule } from "@angular/http";
import { TimeagoModule } from 'ngx-timeago';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { enableProdMode } from '@angular/core';

import { AppComponent } from './app.component';
import { PublicComponent } from './components/public/public.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { HomeComponent } from './components/home/home.component';
import { PublicNavComponent } from './components/public-nav/public-nav.component';
import { PrivateNavComponent } from './components/private-nav/private-nav.component';
import { ProfileAreaComponent } from './components/profile-area/profile-area.component';
import { TileMenuComponent } from './components/tile-menu/tile-menu.component';
//import { ChatPanelComponent } from './chat-panel/chat-panel.component';
import { InfoPanelComponent } from './components/info-panel/info-panel.component';
import { SearchResultListItemComponent } from './components/search-result-list-item/search-result-list-item.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CoverpicComponent } from './components/coverpic/coverpic.component';
import { ModalComponent } from './components/modal/modal.component';
//import { CarouselModule } from 'angular4-carousel';
import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';
import { CapturePicComponent } from './components/capture-pic/capture-pic.component';
import { StoriesComponent } from './components/stories/stories.component';
import { MarketComponent } from './components/market/market.component';
import { PeopleComponent } from './components/people/people.component';
import { FriendRequestPendingListComponent } from './components/friend-request-pending-list/friend-request-pending-list.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatItemComponent } from './components/chat-item/chat-item.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { VideoComponent } from './components/video/video.component';
import { AvchatComponent } from './components/avchat/avchat.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { AdComponent } from './components/ad/ad.component';
import { VideoAlbumIconComponent } from './components/video-album-icon/video-album-icon.component';
import { VideoIconComponent } from './components/video-icon/video-icon.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { AudioIconComponent } from './components/audio-icon/audio-icon.component';
import { AudioAlbumIconComponent } from './components/audio-album-icon/audio-album-icon.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotosIconComponent } from './components/photos-icon/photos-icon.component';
import { PhotosAlbumIconComponent } from './components/photos-album-icon/photos-album-icon.component';
import { PhotosCarouselComponent } from './components/photos-carousel/photos-carousel.component';
import { MusicListComponent } from './components/music-list/music-list.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { StoryBoxComponent } from './components/story-box/story-box.component';
import { FeeditemComponent } from './components/feeditem/feeditem.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { CommentBoxComponent } from './components/comment-box/comment-box.component';
import { CommentitemComponent } from './components/commentitem/commentitem.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemTileComponent } from './components/item-tile/item-tile.component';
import { CartTileComponent } from './components/cart-tile/cart-tile.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AddressInfoComponent } from './components/address-info/address-info.component';
import { PaymentInfoComponent } from './components/payment-info/payment-info.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { PreviewComponent } from './components/preview/preview.component';


import { ChatSearchPipe } from './pipes/chat-search.pipe';
import { PhotosSearchPipe } from './pipes/photos-search.pipe';
import { AlbumSearchPipe } from './pipes/album-search.pipe';
import { AudioSearchPipe } from './pipes/audio-search.pipe';
import { VideoSearchPipe } from './pipes/video-search.pipe';

import { ColorPickerModule } from 'ngx-color-picker';
import { ImageCropperModule } from 'ngx-image-cropper';

import { RouteinfoService } from '../app/services/shareobject/routeinfo.service';
import { ModalService } from '../app/components/modal/modal.service';
import { Globals } from './globals/global';
import { MediaListDirective } from './directives/media/media-list.directive';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    LoginComponent,
    SignupComponent,
    ControlMessagesComponent,
    HomeComponent,
    PublicNavComponent,
    PrivateNavComponent,
    ProfileAreaComponent,
    TileMenuComponent,
    //ChatPanelComponent,
    InfoPanelComponent,
    SearchResultListItemComponent,
    ProfileComponent,
    CoverpicComponent,
    ModalComponent,
    ImageCropperComponent,
    CapturePicComponent,
    FriendRequestPendingListComponent,
    ChatComponent,
    ChatItemComponent,
    ChatSearchPipe,
    ChatWindowComponent,
    VideoComponent,
    AvchatComponent,
    EntertainmentComponent,
    VideoPlayerComponent,
    AdComponent,
    VideoAlbumIconComponent,
    AlbumSearchPipe,
    VideoIconComponent,
    VideoSearchPipe,
    MusicPlayerComponent,
    AudioIconComponent,
    AudioAlbumIconComponent,
    AudioSearchPipe,
    PhotosComponent,
    PhotosIconComponent,
    PhotosAlbumIconComponent,
    PhotosSearchPipe,
    PhotosCarouselComponent,
    MusicListComponent,
    VideoListComponent,
    StoriesComponent,
    StoryBoxComponent,
    FeeditemComponent,
    CheckinComponent,
    CommentBoxComponent,
    CommentitemComponent,
    MarketComponent,
    AddItemComponent,
    ItemTileComponent,
    CartTileComponent,
    CheckoutComponent,
    AddressInfoComponent,
    PaymentInfoComponent,
    PeopleComponent,
    NotificationListComponent,
    PreviewComponent,
    MediaListDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAyu8WfrIIx0RTy0DQ3pP78FuCdtDl7l9Y",
      libraries: ["places"]
    }),
    TimeagoModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ImageCropperModule,
    //CarouselModule,
    ColorPickerModule
   // AngularFontAwesomeModule
  ],
  providers: [RouteinfoService, ModalService, Globals],
  entryComponents: [AppComponent, LoginComponent, SignupComponent, PhotosCarouselComponent, MusicListComponent, VideoListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
