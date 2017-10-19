package ambe.com.vn.moki.fragments;


import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import java.util.ArrayList;

import ambe.com.vn.moki.R;
import ambe.com.vn.moki.activities.MainActivity;
import ambe.com.vn.moki.adapters.ProductAdapter;
import ambe.com.vn.moki.models.products.Image;
import ambe.com.vn.moki.models.products.Product;
import ambe.com.vn.moki.models.users.Profile;

/**
 * A simple {@link Fragment} subclass.
 */
public class ProductMainFragment extends Fragment {

    private ArrayList<String> arrayList;
    int position;
    private View view;
    private RecyclerView rcvProduct;
    private ArrayList<Product> arrProducts;
    private ProductAdapter productAdapter;


    public ProductMainFragment() {
        // Required empty public constructor
    }

    public static ProductMainFragment newInstance() {
        ProductMainFragment productMainFragment = new ProductMainFragment();
        return productMainFragment;
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        view = inflater.inflate(R.layout.fragment_product_main, container, false);
        return view;
    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        arrayList = new ArrayList<>();
        TrangChuFragment trangChuFragment = TrangChuFragment.newInstance();
        arrayList = trangChuFragment.getArr();

        Bundle bundle = getArguments();
        if (bundle != null) {
            position = bundle.getInt("ID", -1);
        }

    }
    @Override
    public void onStart() {
        super.onStart();

    }

    @Override
    public void onActivityCreated(@Nullable Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
        addControls();
        addEvents();
        Bundle bundle = getArguments();

        boolean a=true;
        if (bundle != null) {
            a = bundle.getBoolean("xanhdo", true);
            Log.d("bundle",a+"");
        }
        if(a&& (MainActivity.is_grid)) {
//            grid view
            rcvProduct.setLayoutManager(new GridLayoutManager(getActivity(),2));

        } else{
//              listview
            rcvProduct.setLayoutManager(new GridLayoutManager(getActivity(),1));
        }
        productAdapter=new ProductAdapter(getActivity(),arrProducts);
        rcvProduct.setAdapter(productAdapter);




    }

    private void addEvents() {



    }

    private void addControls() {
        rcvProduct=view.findViewById(R.id.rcv_main_product);


        arrProducts=new ArrayList<Product>();
        ArrayList<Profile> test=new ArrayList<>();

        arrProducts.add(new  Product("Sam sung galaxy S8",new Image("https://cdn.tgdd.vn/Products/Images/42/91131/samsung-galaxy-s8-plus-tim-khoi-400-400x460.png","1"),"1250000",test,test));
        arrProducts.add(new  Product("Sam sung galaxy S8",new Image("https://cdn.tgdd.vn/Products/Images/42/91131/samsung-galaxy-s8-plus-tim-khoi-400-400x460.png","1"),"1250000",test,test));
        arrProducts.add(new  Product("Sam sung galaxy S8",new Image("https://cdn.tgdd.vn/Products/Images/42/91131/samsung-galaxy-s8-plus-tim-khoi-400-400x460.png","1"),"1250000",test,test));
        arrProducts.add(new  Product("Sam sung galaxy S8",new Image("https://cdn.tgdd.vn/Products/Images/42/91131/samsung-galaxy-s8-plus-tim-khoi-400-400x460.png","1"),"1250000",test,test));
        arrProducts.add(new  Product("Sam sung galaxy S8 không bán chỉ cho",new Image("https://cdn.tgdd.vn/Products/Images/42/91131/samsung-galaxy-s8-plus-tim-khoi-400-400x460.png","1"),"1250000",test,test));
        arrProducts.add(new  Product("Sam sung galaxy S8",new Image("https://cdn.tgdd.vn/Products/Images/42/91131/samsung-galaxy-s8-plus-tim-khoi-400-400x460.png","1"),"1250000",test,test));
        arrProducts.add(new  Product("Sam sung galaxy S8",new Image("https://cdn.tgdd.vn/Products/Images/42/91131/samsung-galaxy-s8-plus-tim-khoi-400-400x460.png","1"),"1250000",test,test));
        arrProducts.add(new  Product("Sam sung galaxy S8",new Image("https://cdn.tgdd.vn/Products/Images/42/91131/samsung-galaxy-s8-plus-tim-khoi-400-400x460.png","1"),"1250000",test,test));
        arrProducts.add(new  Product("Sam sung galaxy S8",new Image("https://cdn.tgdd.vn/Products/Images/42/91131/samsung-galaxy-s8-plus-tim-khoi-400-400x460.png","1"),"1250000",test,test));
        arrProducts.add(new  Product("Sam sung galaxy S8",new Image("https://cdn.tgdd.vn/Products/Images/42/91131/samsung-galaxy-s8-plus-tim-khoi-400-400x460.png","1"),"1250000",test,test));
        arrProducts.add(new  Product("Sam sung galaxy S8",new Image("https://cdn.tgdd.vn/Products/Images/42/91131/samsung-galaxy-s8-plus-tim-khoi-400-400x460.png","1"),"1250000",test,test));
        arrProducts.add(new  Product("Sam sung galaxy S8",new Image("https://cdn.tgdd.vn/Products/Images/42/91131/samsung-galaxy-s8-plus-tim-khoi-400-400x460.png","1"),"1250000",test,test));
        arrProducts.add(new  Product("Sam sung galaxy S8",new Image("https://cdn.tgdd.vn/Products/Images/42/91131/samsung-galaxy-s8-plus-tim-khoi-400-400x460.png","1"),"1250000",test,test));
        arrProducts.add(new  Product("Sam sung galaxy S8",new Image("https://cdn.tgdd.vn/Products/Images/42/91131/samsung-galaxy-s8-plus-tim-khoi-400-400x460.png","1"),"1250000",test,test));
        arrProducts.add(new  Product("Sam sung galaxy S8",new Image("https://cdn.tgdd.vn/Products/Images/42/91131/samsung-galaxy-s8-plus-tim-khoi-400-400x460.png","1"),"1250000",test,test));
        arrProducts.add(new  Product("Sam sung galaxy S8",new Image("https://cdn.tgdd.vn/Products/Images/42/91131/samsung-galaxy-s8-plus-tim-khoi-400-400x460.png","1"),"1250000",test,test));
        arrProducts.add(new  Product("Sam sung galaxy S8",new Image("https://cdn.tgdd.vn/Products/Images/42/91131/samsung-galaxy-s8-plus-tim-khoi-400-400x460.png","1"),"1250000",test,test));


    }
}
